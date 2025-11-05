import React from 'react';

function Contact() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">Liên Hệ</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Thông tin liên hệ</h5>
              <div className="row">
                <div className="col-md-6">
                  <h6>Địa chỉ:</h6>
                  <p>123 Đường ABC, Quận XYZ, TP.HCM</p>
                  
                  <h6>Điện thoại:</h6>
                  <p>0123 456 789</p>
                </div>
                <div className="col-md-6">
                  <h6>Email:</h6>
                  <p>contact@example.com</p>
                  
                  <h6>Giờ làm việc:</h6>
                  <p>Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                </div>
              </div>
              
              <div className="alert alert-warning mt-3">
                <strong>Ghi chú:</strong> Đây là trang liên hệ trong bài tập React Router.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;