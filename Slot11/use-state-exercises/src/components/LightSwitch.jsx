//LightSwitch component using useState to toggle light on and off
import React, { useState } from 'react';
function LightSwitch() {
    //Khởi tạo state: isLightOn là boolean, khởi tạo giá trị ban đầu là false (tắt), setIsLightOn là hàm để cập nhật isLightOn
    const [isLightOn, setIsLightOn] = useState(false);  
    //Hàm để chuyển đổi trạng thái đèn
    const toggleLight = () => setIsLightOn(!isLightOn); //đảo trạng thái hiện tại
    // Style chung cho các button
    const buttonStyle = {  
        margin: '5px',
        padding: '10px 20px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px'
    };
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>     
            <h2>Công Tắc Đèn</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Đèn hiện đang: {isLightOn ? 'Bật' : 'Tắt'}  
            </p>
            <button
                onClick={toggleLight}   
                className={`btn ${isLightOn ? 'btn-danger' : 'btn-success'}`}
                style={{ 
                    ...buttonStyle,
                    background: isLightOn ? 'red' : 'green',
                    color: 'white'
                }}  
            >
                {isLightOn ? 'Tắt Đèn' : 'Bật Đèn'}  
            </button>   
        </div>
    );
}
export default LightSwitch;
