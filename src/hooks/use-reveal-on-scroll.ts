import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

function ensureGsapPlugins() {
  if (pluginsRegistered || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
}

export function useRevealOnScroll() {
  const currentLocation = useRouterState({
    select: (state) => `${state.location.pathname}${state.location.hash}`,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    ensureGsapPlugins();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cleanupFns: Array<() => void> = [];

    const ctx = gsap.context(() => {
      if (reduceMotion.matches) {
        gsap.set(
          [
            "[data-reveal]",
            "[data-nav-brand]",
            "[data-nav-link]",
            "[data-nav-cta]",
            "[data-footer-brand]",
            ".interactive-panel",
          ],
          { clearProps: "all", opacity: 1, y: 0, x: 0, scale: 1, rotateX: 0, rotateY: 0 },
        );
        return;
      }

      const introTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTimeline
        .fromTo("[data-nav-brand]", { autoAlpha: 0, y: -18 }, { autoAlpha: 1, y: 0, duration: 0.6 })
        .fromTo(
          "[data-nav-link]",
          { autoAlpha: 0, y: -14 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06 },
          "-=0.35",
        )
        .fromTo(
          "[data-nav-cta]",
          { autoAlpha: 0, scale: 0.94 },
          { autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.08 },
          "-=0.28",
        )
        .fromTo(
          "main section:first-of-type [data-hero-title]",
          { autoAlpha: 0, y: 36 },
          { autoAlpha: 1, y: 0, duration: 0.72 },
          "-=0.2",
        )
        .fromTo(
          "main section:first-of-type [data-hero-copy]",
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.08 },
          "-=0.45",
        )
        .fromTo(
          "main section:first-of-type [data-hero-cta]",
          { autoAlpha: 0, y: 18, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.46, stagger: 0.08 },
          "-=0.32",
        )
        .fromTo(
          "[data-floating-badge]",
          { autoAlpha: 0, x: 26, scale: 0.96 },
          { autoAlpha: 1, x: 0, scale: 1, duration: 0.48, stagger: 0.12 },
          "-=0.2",
        );

      gsap.fromTo(
        "[data-orbital-core]",
        { autoAlpha: 0, scale: 0.92, rotate: -8 },
        { autoAlpha: 1, scale: 1, rotate: 0, duration: 1.1, ease: "power3.out" },
      );

      gsap.to("[data-orbital-grid]", {
        rotate: 360,
        duration: 42,
        ease: "none",
        repeat: -1,
      });

      gsap.to("[data-grid-line]", {
        opacity: 0.42,
        duration: 2.6,
        ease: "sine.inOut",
        stagger: 0.12,
        repeat: -1,
        yoyo: true,
      });

      gsap.to("[data-particle]", {
        y: () => gsap.utils.random(-18, 18),
        x: () => gsap.utils.random(-10, 10),
        duration: () => gsap.utils.random(2.4, 4.2),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.14,
      });

      gsap.to("[data-floating-badge]", {
        y: (index) => (index % 2 === 0 ? -10 : 8),
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.28,
      });

      ScrollTrigger.batch("[data-reveal]", {
        start: "top 86%",
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { autoAlpha: 0, y: 26 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.72,
              ease: "power3.out",
              stagger: 0.11,
              overwrite: true,
            },
          );
        },
      });

      gsap.fromTo(
        "[data-footer-brand]",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-footer-brand]",
            start: "top bottom-=8%",
            once: true,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".interactive-panel").forEach((panel) => {
        const setX = gsap.quickTo(panel, "x", { duration: 0.25, ease: "power2.out" });
        const setY = gsap.quickTo(panel, "y", { duration: 0.25, ease: "power2.out" });
        const setRotateY = gsap.quickTo(panel, "rotateY", {
          duration: 0.3,
          ease: "power2.out",
        });
        const setRotateX = gsap.quickTo(panel, "rotateX", {
          duration: 0.3,
          ease: "power2.out",
        });

        const handleMove = (event: MouseEvent) => {
          const bounds = panel.getBoundingClientRect();
          const px = (event.clientX - bounds.left) / bounds.width - 0.5;
          const py = (event.clientY - bounds.top) / bounds.height - 0.5;

          setX(px * 6);
          setY(py * 6);
          setRotateY(px * 5);
          setRotateX(py * -5);
        };

        const handleLeave = () => {
          gsap.to(panel, {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        panel.addEventListener("mousemove", handleMove);
        panel.addEventListener("mouseleave", handleLeave);
        cleanupFns.push(() => {
          panel.removeEventListener("mousemove", handleMove);
          panel.removeEventListener("mouseleave", handleLeave);
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-hero-cta], [data-nav-cta]").forEach((cta) => {
        const hoverIn = () => {
          gsap.to(cta, {
            y: -2,
            scale: 1.02,
            boxShadow: "0 18px 40px rgba(8, 19, 34, 0.18)",
            duration: 0.25,
            ease: "power2.out",
          });
        };
        const hoverOut = () => {
          gsap.to(cta, {
            y: 0,
            scale: 1,
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            duration: 0.25,
            ease: "power2.out",
          });
        };

        cta.addEventListener("mouseenter", hoverIn);
        cta.addEventListener("mouseleave", hoverOut);
        cleanupFns.push(() => {
          cta.removeEventListener("mouseenter", hoverIn);
          cta.removeEventListener("mouseleave", hoverOut);
        });
      });
    });

    ScrollTrigger.refresh();

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [currentLocation]);
}
