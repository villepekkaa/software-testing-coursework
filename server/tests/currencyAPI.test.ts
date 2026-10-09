import { describe, expect, test } from 'vitest'
import request from 'supertest'
import { app } from '../index'

describe('Currency API', () => {
    test('POST /api/convert/amount returns converted amount', async () => {
        const response = await request(app)
        .post('/api/convert/amount')
        .send({ from: 'EUR', to: 'USD', amount: 100 })

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('amount')
        expect(typeof response.body.amount).toBe('number')
    })
})
