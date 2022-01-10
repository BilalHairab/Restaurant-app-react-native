import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 9uV3j0LZMa_kYM1Q28sbpgG9-sJBCHAGSrDKel0cLASqEm1LcclwHDKnX527CPkBrncKTl7VgAvwieES_i-8qUpVmiiXLCe5WQgEfBxzIeDZxyqSz_IijsHdT1nbYXYx'
    }
})
