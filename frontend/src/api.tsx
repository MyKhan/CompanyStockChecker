import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyComparableData, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./company.d";
// const { AxiosError } = axios;

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error) {
        console.log(error);
        return ("An Unexpected Error has Occurred");
        // if (error instanceof AxiosError) {
        //     console.log(error);
        //     // console.log("Error Message: ", error.message);
        //     // return error.message;
        // } else {
        //     console.log("Unexpected Error: ", error);
        //     return "An Unexpected Error has Occurred";
        // }
    }
}


export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        )
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error);
    }
}

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        )
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error);
    }
}


export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
        )
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error);
    }
}


export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?period=annual&limit=40&apikey=${process.env.REACT_APP_API_KEY}`
        )
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error);
    }
}


export const getCashflow = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?period=annual&limit=40&apikey=${process.env.REACT_APP_API_KEY}`
        )
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error);
    }
}



export const getComparableData = async (query: string) => {
    try {
        const data = await axios.get<CompanyComparableData[]>(
            `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        )
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message at getComparableData from API: ", error.message);
    }
}


export const getTenK = async (query: string) => {
    try {
        const data = await axios.get<CompanyTenK[]>(
            `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-k&page=0&apikey=${process.env.REACT_APP_API_KEY}`
        )
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message at getTenK from API: ", error.message);
    }
}