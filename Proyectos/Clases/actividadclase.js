"use strict";
(() => {
    //1.-arributos, 2.-constructor, 3.-metodos, 4.-getters y setters
    class Manager {
        constructor(name, id, phoneNo, location) {
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.location = location;
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.location = location;
        }
        purchaseInventory() { }
        recordComplaints() { }
        manageStaff() { }
    }
    class Inventory {
        constructor(type, status) {
            this.type = type;
            this.status = status;
            this.type = type;
            this.status = status;
        }
    }
    class Chef {
        constructor(name, id, location) {
            this.name = name;
            this.id = id;
            this.location = location;
            this.name = name;
            this.id = id;
            this.location = location;
        }
        takeOrders() { }
    }
    class FoodItem {
        constructor(id, name) {
            this.id = id;
            this.name = name;
            this.id = id;
            this.name = name;
        }
    }
    class Guest {
        constructor(name, id, phoneNo, address, roomNo) {
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.address = address;
            this.roomNo = roomNo;
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.address = address;
            this.roomNo = roomNo;
        }
        checkIn() { }
        checkOut() { }
        payBill() { }
        orderFood() { }
        submitFeedback() { }
    }
    class Housekeeping {
        constructor(name, id, location) {
            this.name = name;
            this.id = id;
            this.location = location;
            this.name = name;
            this.id = id;
            this.location = location;
        }
        cleanRoom() { }
    }
    class Receptionist {
        constructor(name, id, phoneNo, location) {
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.location = location;
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.location = location;
        }
        checkRoomAvailability() { }
        bookRoom() { }
        generateBill() { }
        acceptCustomerFeedback() { }
    }
    class Room {
        constructor(roomNo, location) {
            this.roomNo = roomNo;
            this.location = location;
            this.roomNo = roomNo;
            this.location = location;
        }
    }
    class Bill {
        constructor(billNo, guestName) {
            this.billNo = billNo;
            this.guestName = guestName;
            this.billNo = billNo;
            this.guestName = guestName;
        }
    }
})();
