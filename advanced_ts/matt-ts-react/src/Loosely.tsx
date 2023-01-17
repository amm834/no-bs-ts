type LooselyType<T extends string> = T | Omit<T, string>;
type TIconSizes = LooselyType<"xs" | "sm" | "lg">;

interface IconProps {
  size: TIconSizes;
}

const Icon = (props: IconProps) => {
  return <div>{props.size}</div>;
};

export default function Loosly() {
  return (
    <div>
      <h1>Loosly</h1>
      <Icon size="sm" />
    </div>
  );
}
