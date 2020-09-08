import React from 'react'
import '../assets/styles/Scrollable.css'

class Scrollable extends React.Component{

   handleScroll = (e) => {
        let element = e.target
        console.log(element.scroll)
    }

    render(){
        return (
            <div className="scrollable" onScroll={this.handleScroll}>
                <span>Scrollable</span>
                <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.x</span>
                <span>Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak</span>
                <span>üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte </span>
                <span>metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı </span>
                <span>zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları </span>
                <span>da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda </span>
                <span>Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</span>
            </div>
        )
    }
}

export default Scrollable
