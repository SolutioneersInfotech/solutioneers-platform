import StackedCards from "@/components/ui/stackedCards/StackedCards"

const cards = [
    {
        id: 1,
        title: "Modern Design System",
        description: "Enterprise-grade UI with consistent design patterns. Scalable component architecture built for complex applications with accessibility at its core.",
        image: "/illustration.avif"
    },
    {
        id: 2,
        title: "Motion & Animation",
        description: "Fluid scroll-driven animations powered by Motion.io. GPU-accelerated transforms create delightful user experiences that feel native and responsive.",
        image: "/illustration4.avif"
    },
    {
        id: 3,
        title: "Developer Experience",
        description: "Type-safe architecture with full TypeScript support. Designed for UI libraries and frameworks with intuitive APIs that reduce development time.",
        image: "/illustration2.avif"
    },
    {
        id: 4,
        title: "High Performance",
        description: "Optimized for 60fps+ with GPU acceleration. Lightweight bundles and intelligent code-splitting ensure blazing-fast load times across all devices.",
        image: "/illustration3.avif"
    }
]

export default function Page() {
    return (
        <section className="work">
            <div className="titleHeader">
                <h2>Why Choose Us</h2>
                <p>Engineered for excellence, built for your success</p>
            </div>
            <StackedCards
                cards={cards}
                gap={15}
                scaleFactor={0.06}
                stickyTop={120}
            />
        </section>
    )
}