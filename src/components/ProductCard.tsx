import type { Product } from '@/lib/types';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

type Props = {
  product: Product;
};

export function ProductCard({
  product: { category, currency, name, price },
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {currency}
          {price}
        </p>
        <p>{category}</p>
      </CardContent>
    </Card>
  );
}
