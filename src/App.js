import React,{useState,useEffect } from "react";
import "./App.css";
import 'antd/dist/antd.css';
import { getUsers } from './js/store/actions/index';
import { connect } from "react-redux";
import Card from './components/card';



function mapDispatchToProps(dispatch) {
  return {
    getUsers: data => dispatch(getUsers(data))
  };
}

function App(props) {
  const [click, setClick] = useState(false);

  const onLoad = () => {
    props.getUsers();
    console.log('functional props',props);
    setClick(true) 
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="header" />
        {click ? <Card/>: ''}
        <button className="button cardAlign" onClick={onLoad}>Load...</button>
        <footer className="footer">
          <p> &#169; target Australia all rights reserved 2020</p>
        </footer>
      </header>
      
    </div>
  );
}
const mapStateToProps = state => ({
   userInfo: state.userInfo
});
const wrapApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default wrapApp;
