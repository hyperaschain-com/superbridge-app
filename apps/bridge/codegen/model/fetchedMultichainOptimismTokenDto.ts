/**
 * Generated by orval v6.26.0 🍺
 * Do not edit manually.
 * API
 * API docs
 * OpenAPI spec version: 1.0
 */
import type { FetchedOptimismTokenDto } from './fetchedOptimismTokenDto';

export interface FetchedMultichainOptimismTokenDto {
  createdAt: string;
  id: string;
  l1: FetchedOptimismTokenDto;
  l2: FetchedOptimismTokenDto;
  updatedAt: string;
}
