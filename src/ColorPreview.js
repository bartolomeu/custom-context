import { useDataset } from "./createDataset";
import { colorData } from "./Picker";

export function ColorPreview() {
  const [color] = useDataset(colorData)
  return <div>{color}</div>
}