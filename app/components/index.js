import mainDr from './main/main';
import navDr from './nav/nav';
import socialDr from './social/social';

export default function(angularModule) {
    mainDr(angularModule);
    navDr(angularModule);
    socialDr(angularModule);
}
