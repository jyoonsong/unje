import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = { 
            isLoading: true,
            places: [],
        };
    }

    componentDidMount() {
        console.log("componentDidMount")
        this._isMounted = true;
        axios.get("//dapi.kakao.com/v2/maps/sdk.js?appkey=691da5bbbd60bbeb6fa11d3f63c1c547").then(response => {
            console.log(response);
        })

        // var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        // var options = { //지도를 생성할 때 필요한 기본 옵션
        //     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        //     level: 3 //지도의 레벨(확대, 축소 정도)
        // };

        // var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render () {
        return (
            <div>
                
                <nav>
                    <div>영업시간</div>
                    <div>지명</div>
                    <div>시간</div>
                </nav>

                <div id="Home"></div>

                <div>List</div>

            </div>
        );
    }
}

export default Home;