import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/createOrder.request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrdersRepository) {}

  async createOrder(request: CreateOrderRequest) {
    return this.orderRepository.create(request);
  }

  async getOrders() {
    return this.orderRepository.find({});
  }
}
