import i18n from "../../services/i18n.js";


class Order {
    constructor(total, newDate, number) {
        if(newDate == null) {
            this.orderDate = new Date(); //$NON-NLS-L$
        }else {
            this.orderDate = newDate;
        }
        if(number == null) {
            this.orderNumber = Math.floor(Math.random() * (99999999 - 10000000) + 10000);
        }
        else {
            this.orderNumber = number;
        }
        
        this.total = total;
    }

    getOrderDate() {
        let date = i18n.formatDate();
        return date;
    }

    //create a dummy "order status" string
    getOrderStatus() {
        //calculate diff
        let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        let now = new Date(); //$NON-NLS-L$
        let statusProcessing = i18n.getString("OrderStatus", "statusProcessing");
        let statusShipped = i18n.getString("OrderStatus", "statusShipped");
        let statusDelivered = i18n.getString("OrderStatus", "statusDelivered");
        var diffDays = Math.floor(Math.abs((this.orderDate.getTime() - now.getTime())/(oneDay))); //$NON-NLS-L$

        if(diffDays < 2) {
            return statusProcessing;
        }
        if(diffDays < 4) {
            return statusShipped;
        }
        else{
            return statusDelivered;
        }
        
    }

}

export {Order};