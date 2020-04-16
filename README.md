# Spatium

Calculate the distance between two points.

## Installation

```bash
$ npm install spatium
```

## Example

```tsx
import distance, { IPosition } from 'spatium';

const first: IPosition = [1205, 40];
const second: IPosition = [85, 575];

console.log(Math.floor(distance(first, second))); // 1241
```
