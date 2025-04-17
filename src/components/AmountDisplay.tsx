import { formatCurrency } from "../helpers"
type AmountDisplaypProps = {
    label?: string
    amount: number
}
export default function AmountDisplay({ label, amount} : AmountDisplaypProps) {
  return (
    <p className="text-2xl text-blue-600 font-black">
   
      {label && `${label}: `}
      <span className="font-black text-black">{formatCurrency(amount)} </span>
    </p>
  );
}
