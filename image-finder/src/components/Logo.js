import {Component} from "react";

const styles = {
    logo : {
        fontWeight :'700',
        fontSize: '1rem',
        flex: 'left',
        padding: '10px 5px',
        color: '#117AEB',
    }
}

class Logo extends Component{
    render(){
        return(
            <div style={styles.logo}>
                Image-Finder
            </div>
        )
    }
}

export default Logo