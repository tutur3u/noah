"use client";

import { useEffect, useRef, useState } from "react";

export function useCounter(
	end: number,
	duration: number = 2000,
	startOnView: boolean = true,
) {
	const [count, setCount] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!startOnView) {
			setHasStarted(true);
		}
	}, [startOnView]);

	useEffect(() => {
		if (startOnView && ref.current) {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting && !hasStarted) {
						setHasStarted(true);
					}
				},
				{ threshold: 0.5 },
			);
			observer.observe(ref.current);
			return () => observer.disconnect();
		}
	}, [hasStarted, startOnView]);

	useEffect(() => {
		if (!hasStarted) return;

		let startTime: number;
		const step = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);
			setCount(Math.floor(progress * end));
			if (progress < 1) {
				requestAnimationFrame(step);
			}
		};
		requestAnimationFrame(step);
	}, [end, duration, hasStarted]);

	return { count, ref };
}
