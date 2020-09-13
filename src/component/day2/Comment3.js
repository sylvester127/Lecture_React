import React, {Component} from 'react';

// Comment 컴포넌트 작성
const styles = {
    root:{
        width:'20%',
        margin: 'auto',
        marginTop: 16,
        padding: 16,
        textAlign: 'left',
        backgroundColor:'#f6f6f6',
        borderRadius: 16
    },
    imageContainer:{
        display: 'inline-block',
        width: 50
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25
    },
    commentContainer: {
        display: 'inline-block',
        marginLeft: 16,
        textAlign: 'left',
        verticalAlign: 'top'
    },
    nameText:{
        color: 'black',
        fontSize: 20,
        fontWeight: '700'
    },
    contentText:{
        color: 'black',
        fontSize: 16
    }
}

export default class Comment3 extends Component {
    render(){
        const {name, content} = this.props;

        return (
            <div style={styles.root}>
                <div style={styles.imageContainer}>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                        style={styles.image}
                    />
                </div>
                <div style={styles.commentContainer}>
                    <div style={styles.nameText}>
                        {name}
                    </div>
                    <span style={styles.contentText}>
                        {content}
                    </span>
                </div>
            </div>
        );
    }
}
