class CatalogGroup {
    constructor(name, composites) {
        this.name = name;
        this.composites = composites;
    }

    total() {
        return this.composites.reduce((total, nextItem) => total + nextItem.total, 0);
    }

    print() {
        console.log(this.name);
        this.composites.forEach((item) =>  {
                console.log(item);
            }
        );
    }
}

module.exports = CatalogGroup;
