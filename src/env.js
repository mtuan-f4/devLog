/**
 * Created by slashhuang on 16/3/3.
 */


export default function(){
    //默认不打印,仅仅在本地调试的时候有日志出现
    let applyDevConsole = false;
    let Env='';
    const HostExp = /127\.0\.0\.1/ig;
    if(window && window.location) {
        Env = location.hostname;
        applyDevConsole = !!HostExp.test(Env);
        if (localStorage.getItem('DianPing') == 'mTuan-f4') {
            //线上环境加层localStorage判断,不设置过期时间
            applyDevConsole = true;
        }
    }
    return applyDevConsole
};