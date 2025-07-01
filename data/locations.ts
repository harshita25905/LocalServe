export interface Location {
  id: string
  name: string
  state: string
  type: "city" | "area" | "metro"
  pincode?: string
  popular?: boolean
}

export const indianLocations: Location[] = [
  // Mumbai and Maharashtra
  { id: "mumbai", name: "Mumbai", state: "Maharashtra", type: "metro", popular: true },
  { id: "andheri", name: "Andheri", state: "Maharashtra", type: "area", pincode: "400053" },
  { id: "bandra", name: "Bandra", state: "Maharashtra", type: "area", pincode: "400050" },
  { id: "powai", name: "Powai", state: "Maharashtra", type: "area", pincode: "400076" },
  { id: "thane", name: "Thane", state: "Maharashtra", type: "city", pincode: "400601" },
  { id: "navi-mumbai", name: "Navi Mumbai", state: "Maharashtra", type: "city", pincode: "400614" },
  { id: "pune", name: "Pune", state: "Maharashtra", type: "metro", popular: true },
  { id: "koregaon-park", name: "Koregaon Park", state: "Maharashtra", type: "area", pincode: "411001" },
  { id: "hinjewadi", name: "Hinjewadi", state: "Maharashtra", type: "area", pincode: "411057" },

  // Delhi and NCR
  { id: "delhi", name: "New Delhi", state: "Delhi", type: "metro", popular: true },
  { id: "gurgaon", name: "Gurgaon", state: "Haryana", type: "city", popular: true },
  { id: "noida", name: "Noida", state: "Uttar Pradesh", type: "city", popular: true },
  { id: "faridabad", name: "Faridabad", state: "Haryana", type: "city", pincode: "121001" },
  { id: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh", type: "city", pincode: "201001" },
  { id: "dwarka", name: "Dwarka", state: "Delhi", type: "area", pincode: "110075" },
  { id: "rohini", name: "Rohini", state: "Delhi", type: "area", pincode: "110085" },
  { id: "lajpat-nagar", name: "Lajpat Nagar", state: "Delhi", type: "area", pincode: "110024" },

  // Bangalore and Karnataka
  { id: "bangalore", name: "Bangalore", state: "Karnataka", type: "metro", popular: true },
  { id: "whitefield", name: "Whitefield", state: "Karnataka", type: "area", pincode: "560066" },
  { id: "koramangala", name: "Koramangala", state: "Karnataka", type: "area", pincode: "560034" },
  { id: "indiranagar", name: "Indiranagar", state: "Karnataka", type: "area", pincode: "560038" },
  { id: "electronic-city", name: "Electronic City", state: "Karnataka", type: "area", pincode: "560100" },
  { id: "hebbal", name: "Hebbal", state: "Karnataka", type: "area", pincode: "560024" },
  { id: "mysore", name: "Mysore", state: "Karnataka", type: "city", pincode: "570001" },

  // Hyderabad and Telangana
  { id: "hyderabad", name: "Hyderabad", state: "Telangana", type: "metro", popular: true },
  { id: "hitech-city", name: "Hitech City", state: "Telangana", type: "area", pincode: "500081" },
  { id: "gachibowli", name: "Gachibowli", state: "Telangana", type: "area", pincode: "500032" },
  { id: "madhapur", name: "Madhapur", state: "Telangana", type: "area", pincode: "500081" },
  { id: "secunderabad", name: "Secunderabad", state: "Telangana", type: "city", pincode: "500003" },

  // Chennai and Tamil Nadu
  { id: "chennai", name: "Chennai", state: "Tamil Nadu", type: "metro", popular: true },
  { id: "anna-nagar", name: "Anna Nagar", state: "Tamil Nadu", type: "area", pincode: "600040" },
  { id: "adyar", name: "Adyar", state: "Tamil Nadu", type: "area", pincode: "600020" },
  { id: "velachery", name: "Velachery", state: "Tamil Nadu", type: "area", pincode: "600042" },
  { id: "omr", name: "OMR (IT Corridor)", state: "Tamil Nadu", type: "area", pincode: "600119" },
  { id: "coimbatore", name: "Coimbatore", state: "Tamil Nadu", type: "city", pincode: "641001" },

  // Kolkata and West Bengal
  { id: "kolkata", name: "Kolkata", state: "West Bengal", type: "metro", popular: true },
  { id: "salt-lake", name: "Salt Lake", state: "West Bengal", type: "area", pincode: "700064" },
  { id: "park-street", name: "Park Street", state: "West Bengal", type: "area", pincode: "700016" },
  { id: "howrah", name: "Howrah", state: "West Bengal", type: "city", pincode: "711101" },

  // Ahmedabad and Gujarat
  { id: "ahmedabad", name: "Ahmedabad", state: "Gujarat", type: "metro", popular: true },
  { id: "sg-highway", name: "SG Highway", state: "Gujarat", type: "area", pincode: "380015" },
  { id: "satellite", name: "Satellite", state: "Gujarat", type: "area", pincode: "380015" },
  { id: "surat", name: "Surat", state: "Gujarat", type: "city", pincode: "395001" },
  { id: "vadodara", name: "Vadodara", state: "Gujarat", type: "city", pincode: "390001" },

  // Jaipur and Rajasthan
  { id: "jaipur", name: "Jaipur", state: "Rajasthan", type: "metro", popular: true },
  { id: "malviya-nagar-jaipur", name: "Malviya Nagar", state: "Rajasthan", type: "area", pincode: "302017" },
  { id: "vaishali-nagar", name: "Vaishali Nagar", state: "Rajasthan", type: "area", pincode: "302021" },
  { id: "jodhpur", name: "Jodhpur", state: "Rajasthan", type: "city", pincode: "342001" },

  // Lucknow and Uttar Pradesh
  { id: "lucknow", name: "Lucknow", state: "Uttar Pradesh", type: "metro", popular: true },
  { id: "gomti-nagar", name: "Gomti Nagar", state: "Uttar Pradesh", type: "area", pincode: "226010" },
  { id: "hazratganj", name: "Hazratganj", state: "Uttar Pradesh", type: "area", pincode: "226001" },
  { id: "kanpur", name: "Kanpur", state: "Uttar Pradesh", type: "city", pincode: "208001" },
  { id: "agra", name: "Agra", state: "Uttar Pradesh", type: "city", pincode: "282001" },

  // Bhubaneswar and Odisha
  { id: "bhubaneswar", name: "Bhubaneswar", state: "Odisha", type: "metro", popular: true },
  { id: "patia", name: "Patia", state: "Odisha", type: "area", pincode: "751024" },
  { id: "sahid-nagar", name: "Sahid Nagar", state: "Odisha", type: "area", pincode: "751007" },

  // Chandigarh and Punjab
  { id: "chandigarh", name: "Chandigarh", state: "Chandigarh", type: "metro", popular: true },
  { id: "sector-17", name: "Sector 17", state: "Chandigarh", type: "area", pincode: "160017" },
  { id: "mohali", name: "Mohali", state: "Punjab", type: "city", pincode: "160055" },
  { id: "ludhiana", name: "Ludhiana", state: "Punjab", type: "city", pincode: "141001" },

  // Kochi and Kerala
  { id: "kochi", name: "Kochi", state: "Kerala", type: "metro", popular: true },
  { id: "kakkanad", name: "Kakkanad", state: "Kerala", type: "area", pincode: "682030" },
  { id: "mg-road-kochi", name: "MG Road", state: "Kerala", type: "area", pincode: "682035" },
  { id: "thiruvananthapuram", name: "Thiruvananthapuram", state: "Kerala", type: "city", pincode: "695001" },

  // Indore and Madhya Pradesh
  { id: "indore", name: "Indore", state: "Madhya Pradesh", type: "metro", popular: true },
  { id: "vijay-nagar", name: "Vijay Nagar", state: "Madhya Pradesh", type: "area", pincode: "452010" },
  { id: "bhopal", name: "Bhopal", state: "Madhya Pradesh", type: "city", pincode: "462001" },

  // Nagpur and Maharashtra (additional)
  { id: "nagpur", name: "Nagpur", state: "Maharashtra", type: "city", pincode: "440001" },
  { id: "nashik", name: "Nashik", state: "Maharashtra", type: "city", pincode: "422001" },

  // Visakhapatnam and Andhra Pradesh
  { id: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh", type: "city", pincode: "530001" },
  { id: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh", type: "city", pincode: "520001" },
]

export const getLocationsBySearch = (query: string): Location[] => {
  if (!query || query.length < 2) return []

  const searchTerm = query.toLowerCase()
  return indianLocations
    .filter(
      (location) =>
        location.name.toLowerCase().includes(searchTerm) ||
        location.state.toLowerCase().includes(searchTerm) ||
        (location.pincode && location.pincode.includes(searchTerm)),
    )
    .slice(0, 10) // Limit to 10 results
}

export const getPopularLocations = (): Location[] => {
  return indianLocations.filter((location) => location.popular)
}

export const getLocationsByState = (state: string): Location[] => {
  return indianLocations.filter((location) => location.state.toLowerCase() === state.toLowerCase())
}
