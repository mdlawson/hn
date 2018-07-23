import React, { Component } from "react";

import { SkeletonText } from "./Skeleton.style";

export interface Props {
  characters?: number;
  lines?: number;
  variance?: number;
}

export class Skeleton extends Component<Props> {
  render() {
    const { characters = 20, lines = 1, variance = 0.2 } = this.props;

    return Array(lines)
      .fill(null)
      .map(() => (
        <SkeletonText>{"_".repeat(varyByPercentage(characters, variance))}</SkeletonText>
      ));
  }
}

function varyByPercentage(num: number, percent: number) {
  const diff = num * percent;
  const min = num - diff;
  const max = num + diff;
  return num + Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Skeleton;
