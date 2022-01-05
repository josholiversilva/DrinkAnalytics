export default function getMonday(now){
    now = new Date(now)
    var day = now.getDay(),
        diff = now.getDate() - day + (day == 0 ? -6:1);
    now = new Date(now.setDate(diff))
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
}