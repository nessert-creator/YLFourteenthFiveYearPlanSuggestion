import React from 'react';
import { connect } from 'dva';
import styles from './Activation.css';
import Logo from "../../assets/logologin.gif";
function Activation({ dispatch, form, children }) {
    return (<div className={styles.navbox}>
      <div className={styles.logologin}><img src={Logo}/></div>
      <div className={styles.indexbox}>
        
        
        
        
        {children}
      </div>
    </div>);
}
Activation = connect((state) => {
    return Object.assign({}, state.Activation);
})(Activation);
export default Activation;
