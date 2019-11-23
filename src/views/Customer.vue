<template>
    <section>
        <div id="map" style="width:500px;height:400px;"></div>
        <ul class="customer-box">
            <li>
                <font-awesome-icon icon="building" size="4x" color="gold" />
                <p>회사주소<br/>
            경기도 부천시 소향로 225 B동 802호</p>
            </li>
            <li>
                <font-awesome-icon icon="phone-volume" size="4x" color="gold" />
                <p>전화<br/>
            032-328-4750</p></li>
            <li>
                <font-awesome-icon icon="fax" size="4x" color="gold" />
                <p>팩스<br/>
                032-328-4754</p></li>
            <li>
                <font-awesome-icon icon="envelope" size="4x" color="gold" />
                <p>이메일<br/>
            sales@tech-bee.com</p></li>
        </ul>
    </section>    
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
declare var kakao: any;
@Component
export default class Customer extends Vue {
    private mounted() {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.501233, 126.772730),
            level: 3
        };
    
        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.501233, 126.772730); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        var iwContent = '<div style="padding:15px 15px 15px 37px;">(주)테크비', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(37.501233, 126.772730); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });
        
        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker);
    }
}
</script>
<style lang="scss">
#map {
    margin: 30px auto;
}
.customer-box {
    display: flex;
    border: 1px solid #959595;
    margin: 0 auto;
    padding: 34px 0;
    text-align: center;
    width: 1140px;
}

.customer-box li {
    padding: 0 36px;
    width: 212px;
}

.customer-box li:nth-child(1), .customer-box li:nth-child(2), .customer-box li:nth-child(3) {
    border-right: 1px solid #959595;
}
</style>