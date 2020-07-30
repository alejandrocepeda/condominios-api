const admin = require('firebase-admin')
const { config } = require('../../config')
const serviceAccount = require('./delivery-278619-firebase-adminsdk-8grqz-7a4ff4f9f4.json')
const _ = require('lodash')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: config.fireDataBaseUrl
})

function Order(ref = 'orders'){
    return {               
        store: (async (order) => {
            
            const db = admin.database()

            const toCreate = {
                id:order.id,
                customer_id: order.customer_id,
                distributor_id: 0,
                partner_id: order.partner_id,
                total_amount: order.total_amount,
                distributor_coordinates: '',
                customer_coordinates: '',
                order_distance: 0,
                order_duration: 0,
                status_id: order.status_id
            }
        
            db.ref(ref).push(toCreate)
        }),
        update: (async (id,order) => {
            
            const db = admin.database()            
            const collection = db.ref(ref)
            const snapshot = await collection.once('value') 
            
            /*
            const array = _.toArray(snapshot.val())

            array.map((i) => {
                console.log(i.id)
            })
            */

            //console.log(order[0].id)

            
            snapshot.forEach((childSnapshot) => {
                const key = childSnapshot.key                    
                const childData = childSnapshot.val()

                if (id == childData.id){
                    db.ref(`orders/${key}`).update({
                        status_id: parseInt(order.status_id)
                    })
                }
            })
        }),                
    }
}

module.exports = {
    Order
}