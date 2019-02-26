export default class Matrix2
{
    constructor(items)
    {
        this.items = items || [
            0,0,
            0,0,
        ]
    }

    add(m)
    {
        const a = this.items
        let b = m
        this.items = [
            a[0] + b[0], a[1] + b[1],
            a[2] + b[2], a[3] + b[3],
        ]
     }

    sub(m)
    {
        const a = this.items
        let b = m
        this.items = [
            a[0] - b[0], a[1] - b[1],
            a[2] - b[2], a[3] - b[3],
        ]
    }

    mul(m)
    {
        const a = this.items
        let b = m
        const c = []

        c[0] = a[0] * b[0] + a[1] * b[2]
        c[1] = a[0] * b[1] + a[1] * b[3]
        c[2] = a[2] * b[0] + a[3] * b[2]
        c[3] = a[2] * b[1] + a[3] * b[3]

        this.items = c
    }
}