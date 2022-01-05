export default function getMonday(now){
    now = new Date(now)
    var day = now.getDay(),
        diff = now.getDate() - day + (day == 0 ? -6:1);
    return new Date(now.setDate(diff))
}