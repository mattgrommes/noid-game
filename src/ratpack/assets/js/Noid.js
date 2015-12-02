function Noid(genome) {

    this.speed = 0;
    this.movePercentage = 0;

    function getGene(number) {
        var start = (number - 1) * 8
        var end = start + 7;

        return genome.slice(start, end)
    }

    function getGeneValue(gene) {
        return gene != null ? parseInt(gene.join(""), 2) : null;
    }

    if ( this instanceof Noid ) {
        this.genome = genome;

        var speedGene = getGene(1);
        this.speed = parseInt( getGeneValue(speedGene));

        var moveGene = getGene(2);
        this.movePercentage = parseInt(getGeneValue(moveGene) / 2.6, 10);

        console.log("S: "+speedGene);
        console.log("M: "+moveGene);
        console.log("S: "+this.speed);
        console.log("M: "+this.movePercentage);

    } else {
        return new Noid(genome);
    }


}

Noid.prototype.move = function() {
    if(!this.sprite)
        return;

    var sprite = this.sprite;

    var moveRand = Math.floor((Math.random() * 100) + 1);
    if(moveRand < this.movePercentage) {
        var direction = Math.floor((Math.random() * 8) + 1);
        switch (direction) {
            case 1:
                sprite.body.velocity.x = this.speed;
                sprite.body.velocity.y = 0;
                break;
            case 2:
                sprite.body.velocity.x = -this.speed;
                sprite.body.velocity.y = 0;
                break;
            case 3:
                sprite.body.velocity.y = this.speed;
                sprite.body.velocity.x = 0;
                break;
            case 4:
                sprite.body.velocity.y = -this.speed;
                sprite.body.velocity.x = 0;
                break;
            case 5:
                sprite.body.velocity.y = this.speed;
                sprite.body.velocity.x = this.speed;
                break;
            case 6:
                sprite.body.velocity.y = this.speed;
                sprite.body.velocity.x = -this.speed;
                break;
            case 7:
                sprite.body.velocity.y = -this.speed;
                sprite.body.velocity.x = -this.speed;
                break;
            case 8:
                sprite.body.velocity.y = -this.speed;
                sprite.body.velocity.x = this.speed;
                break;
        }
    }
}
