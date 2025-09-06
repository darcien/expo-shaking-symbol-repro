import { View, ViewProps } from "react-native";

export type ReproProps = Pick<ViewProps, "id" | "role">;

export function Repro({ id, ...props }: ReproProps) {
  return <View {...props} />;
}

export function NotRepro({ ...props }: ReproProps) {
  return <View {...props} />;
}
