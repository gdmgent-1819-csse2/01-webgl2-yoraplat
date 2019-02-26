export default class Vector2
{
    constructor(x,y)
    {
        this.x = Number(x) || 0
        this.y = Number(y) || 0
    }

    add(v)
    {
        this.x += v.y
        this.y += v.y
    }

    sub(v)
    {
        this.x -= v.y
        this.y -= v.y
    }

    scaler(a)
    {
        this.x *= a
        this.y *= a  
    }

    norm()
    {
        let norm = Math.sqrt(this.x **2 + this.y **2)
        return norm
    }

    dotProduct(v)
    {
        let dp = this.x * v.x + this.y * v.y
        return dp
    }
}