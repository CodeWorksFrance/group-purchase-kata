export interface BillInterface {
  total: number;
  amount: number;
  items: { name: string; amount: number; fee: number }[];
}
