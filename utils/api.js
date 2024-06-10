import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
const MASTER_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clw7m4y0i00g107vyeevd2k9z/master";
const client = new ApolloClient({
  uri: MASTER_URL,
});
const getSlider = async () => {
  const result = await client.query({
    query: gql`
        query GetSliders {
            sliders {
                id
                name
                image {
                url
            }
            }
          }
        `,
  });
  return result;
};

const getCategories = async () => {
    const result = await client.query({
      query: gql`
        query GetCategories {
            categories {
            id
            name
            icon {
                url
            }
            }
        }
          `,
    });
    return result;
  };

  const getBusinessList = async () => {
    const result = await client.query({
      query: gql`
        query getBusinessList {
          businessLists {
            id
            email
            name
            contactPerson
            category {
              name
            }
            address
            about
            images {
              url
            }
          }
        }
          `,
    });
    return result;
  };

  const getBusinessListByCategory = async (category) => {
    const result = await client.query({
      query: gql`
        query getBusinessList {
          businessLists(where: {category: {name: "${category}"}}) {
            id
            email
            name
            contactPerson
            category {
              name
            }
            address
            about
            images {
              url
            }
          }
        }
          `,
    });
    return result;
  };
  const getUserBookings = async (userEmail) => {
    const result = await client.query({
      query: gql`
        query GetUserBookings {
        bookings(orderBy: updatedAt_DESC, where: {userEmail: "${userEmail}"}) {
          time
          userEmail
          userName
          bookingStatus
          date
          id
          businessList {
            id
            images {
              url
            }
            name
            address
            contactPerson
            email
            about
          }
        }
      }      
          `,
    });
    return result;
  };

const createBooking = async (data) => {
    const result = await client.mutate({
        mutation: gql`
        mutation createBooking($data: BookingCreateInput!) {
            createBooking(data: $data) {
                id
            }
            publishManyBookings(to: PUBLISHED) {
                count
            }
        }
        `,
        variables: {
            data: {
                bookingStatus: "Booked",
                businessList: { connect: { id: data.businessId } },
                date: data.date,
                time: data.time,
                userEmail: data.userEmail,
                userName: data.userName,
            },
        },
    });
    return result;
};
export default {
  getSlider,
  getCategories,
  getBusinessList,
  getBusinessListByCategory,
  createBooking,
  getUserBookings
};
