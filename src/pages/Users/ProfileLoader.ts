/* eslint-disable @typescript-eslint/no-throw-literal */
import { json } from 'react-router-dom'
import { getOrders } from '../../services/apis/order'
import { getProfile } from '../../services/apis/profile'
import {
  type MetaData,
  type Features,
  type Pictures
} from '../../services/apis/type'

export interface UserData {
  name: string
  email: string
  tel: string
  nik: string
  sim: string
  photo: string
  order: OrderData[]
  meta: MetaData
}

interface GenericOrderObject {
  Name: string
  Desc: string
  Pictures: Pictures[]
  Features: Features[]
}

export interface OrderData {
  id: number
  start_period: string
  end_period: string
  payment_method: string
  status: string
  total_amount: number
  car?: GenericOrderObject
  driver?: GenericOrderObject
  tour?: GenericOrderObject
  type: string
}

export function mapToUserData(user: any, order: any): UserData {
  return {
    name: user.name,
    email: user.email,
    tel: user.phone,
    nik: user.nik,
    sim: user.sim,
    photo: user.photo.PhotoPath,
    order: order.data,
    meta: order.meta
  }
}

export default async function ProfileLoader() {
  const [profile, userOrder] = await Promise.all([getProfile(), getOrders()])

  if (!profile) {
    throw new Response('Not Found', { status: 404 })
  }

  if (!userOrder) {
    throw new Response('Order not found', { status: 404 })
  }

  return json(mapToUserData(profile, userOrder))
}
