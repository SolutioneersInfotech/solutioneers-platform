import StackedCards from "@/components/ui/stackedCards/StackedCards"

const cards = [
    {
        id: 1,
        title: "Modern Design System",
        description: "Build consistent UI with scalable components.",
        image: "/illustration.avif"
    },
    {
        id: 2,
        title: "Motion Powered UI",
        description: "Scroll driven animations powered by Motion.",
        image: "/illustration4.avif"
    },
    {
        id: 3,
        title: "Developer Experience",
        description: "Type safe architecture designed for UI libraries.",
        image: "/illustration2.avif"
    },
    {
        id: 4,
        title: "High Performance",
        description: "GPU accelerated transforms for smooth 60fps.",
        image: "/illustration3.avif"
    }
]

export default function Page() {
    return (
        <section className="work">
            <StackedCards
                cards={cards}
                gap={90}
                scaleFactor={0.06}
                stickyTop={120}
            />
        </section>
    )
}