import styled from "styled-components";

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden; //溢出内容修剪
    /* background: #000; */
`

export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    padding-top: 30px;
    float: left;
    .banner-img{
        width:625px;
        height:270px;
    }
`

export const HomeRight = styled.div`
    width:280px;
    float:right;
`

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow: hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    background:#f7f7f7;
    height: 32px;
    line-height:32px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    float: left;    // 多项浮动显示
    padding-right:10px; // 配合子标签pic margin-right 让两边都留10px
    margin-left:18px;  // 配合父标签wrapper margin-left  
    margin-bottom:18px;
    .topic-pic{ 
        width: 32px;
        height: 32px;
        display:block;
        float: left;
        margin-right:10px;
    }
`

export const ListItem = styled.div`
    padding:20px 0;
    overflow: hidden;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius:10px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-top:8px;
    background:url(${(props) => props.imgUrl});
    background-size: cover;
`

export const WriterWrapper = styled.div`
    width: 278px;
    border-radius:3px;
`
export const WriterTitle = styled.div`
    color:#969696;
    font-size:14px;
`

export const WriterToggle = styled.div`
    float:right;
`
export const WriterItem = styled.div`
    margin:15px 0 0 0;
    color:#333;
    .pic{
        width: 48px;
        height: 48px;
        border-radius:24px;
        background-size: contain;
        display:block;
        float:left;
    };
    .author{
        font-size:14px;
        margin:0 60px 0 0;
        padding:5px 0 0;
    };
    .desc{
        font-size:12px;
        margin:2px 0 10px ;
        color:#969696;
    }
    .get{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height:40px;
    background: #a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor: pointer;
`
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:10px;
    font-size:18px;
    width:100px;
    height: 60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
`