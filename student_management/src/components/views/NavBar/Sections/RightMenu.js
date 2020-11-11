// 상태에 따라 화면이 바뀔 메뉴 바.

import React from 'react';
import { Menu } from 'antd';
import {DingtalkOutlined} from '@ant-design/icons'

function RightMenu(props) {
  const{login,_logout} =props;
  return (
    <div className="menu_right">
    <Menu mode="horizontal">
    {!login? <Menu.Item key="rightLogin">
      <a href="/login" style={{fontSize:15}}> {/*3항 연산자로 로그인시, 아닐시 보일 view 설정*/}
      로그인
      </a>
    </Menu.Item>:
    <Menu.Item key="rightLogin" onClick={()=>props._logout()}>
    <a style={{fontSize:15}}>
      로그아웃
    </a>
  </Menu.Item>
}  
    
  {!login?<Menu.Item key="rightRegister">
      <a href="/register" style={{fontSize:15}}>
      <DingtalkOutlined/>
        회원가입
      </a>
    </Menu.Item>:null}
    
    </Menu>
  </div>
  )
}

export default RightMenu