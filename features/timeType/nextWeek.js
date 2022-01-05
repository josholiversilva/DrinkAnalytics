export default function nextWeek(now){
    return new Date(now.getFullYear(), now.getMonth(), now.getDate()+7);
}