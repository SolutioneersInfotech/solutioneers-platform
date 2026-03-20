"use client";
import "./interactiveGrid.scss";

/* ================= TYPES ================= */

interface InteractiveGridProps
    extends React.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    squares?: [number, number]; // [horizontal, vertical]
    className?: string;
    squaresClassName?: string;
}

/* ================= COMPONENT ================= */

const InteractiveGrid: React.FC<InteractiveGridProps> = ({
    width = 40,
    height = 40,
    squares = [10, 10],
    ...props
}) => {

    const [horizontal, vertical] = squares;

    return (
        <svg
            width={width * horizontal}
            height={height * vertical}
            className="grid"
            {...props}
        >
            {Array.from({ length: horizontal * vertical }).map((_, index) => {
                const x = (index % horizontal) * width;
                const y = Math.floor(index / horizontal) * height;

                return (
                    <rect
                        key={index}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        className="square"
                    />
                );
            })}
        </svg>
    );
};

export default InteractiveGrid;