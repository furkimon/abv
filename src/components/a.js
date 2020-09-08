handleScroll (event) {
    const currentItem = ((event.target.scrollLeft + this.addition) / this.cardWidth).toFixed(0)
    this.scrolledLeft = this.$refs['card-container'].scrollLeft
    this.isMaxed = this.$refs['card-container'].scrollLeftMax === this.$refs['card-container'].scrollLeft
    if (this.$refs['card-container'].scrollLeft + this.cardWidth < this.$refs['card-container'].scrollLeftMax || this.$refs['card-container'].scrollLeft === this.$refs['card-container'].scrollLeftMax - this.cardWidth) {
      this.$refs['card-container'].scrollTo({
        top: 0,
        left: currentItem * this.cardWidth,
        behavior: 'smooth'
      })
    }
  },
  handleArrowLeft () {
    this.scrolledLeft = this.$refs['card-container'].scrollLeft
    this.$refs['card-container'].scrollTo({
      top: 0,
      left: this.$refs['card-container'].scrollLeft - this.cardWidth,
      behavior: 'smooth'
    })
  },
  handleArrowRight () {
    if (this.$refs['card-container'].scrollLeft + this.cardWidth > this.$refs['card-container'].scrollLeftMax) {
      this.$refs['card-container'].scrollTo({
        top: 0,
        left: this.$refs['card-container'].scrollLeftMax,
        behavior: 'smooth'
      })
    } else {
      this.$refs['card-container'].scrollTo({
        top: 0,
        left: this.$refs['card-container'].scrollLeft + this.cardWidth,
        behavior: 'smooth'
      })
    }
  }