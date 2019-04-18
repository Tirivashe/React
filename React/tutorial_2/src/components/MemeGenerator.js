import React, {Component} from 'react'

class MemeGenerator extends Component{
    
    state = {
        topText: "",
        bottomText: "",
        img: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(res => {
            const {memes} = res.data
            this.setState({allMemeImgs : memes})
        })
    }

    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMeme = this.state.allMemeImgs[randNum].url;
        this.setState({
            img: randMeme
        })
    }


    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange} />
                     <input type="text" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.handleChange}/>


                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.img} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>

            </div>
        )
    }
}

export default MemeGenerator