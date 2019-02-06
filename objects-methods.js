let restaurant = {
    name: 'Om Ganesh',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let remainingSeats = this.guestCapacity - this.guestCount
        return partySize <= remainingSeats
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))