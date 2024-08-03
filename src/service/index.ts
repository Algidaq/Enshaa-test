import { object } from "zod";
import { HttpService } from "./HttpService";

export * from "./HttpService";

export async function apiCreateQuotationFromTextOrFile(
  requestData: any,
  token?: string
) {
  try {
    //requestData = JSON.stringify(requestData);
    const response = await HttpService.post("/api/quotations", requestData, {
      headers: {
        authorization: token,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error: Failed to create quotation.",
    };
  }
}

export async function apiListQutations(token?: string) {
  try {
    //requestData = JSON.stringify(requestData);
    const response = await HttpService.get("/api/quotations", {
      headers: {
        authorization: token,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error: Failed to get quotations.",
    };
  }
}

export async function apiQutationById(id: any, token?: string) {
  try {
    //requestData = JSON.stringify(requestData);
    const path = "/api/quotations/" + id;
    console.log(path);
    const response = await HttpService.get(path, {
      headers: { authorization: token, "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error: Failed to get quotation {id}.",
    };
  }
}
export async function apiGetProfile() {
  try {
    //requestData = JSON.stringify(requestData);
    const response = await HttpService.get("/api/profile", {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE5MzE5MzkyfQ.6Y9oAWiiqk560BHZHWvROXXVNVnldiTe0cDMQDyAh8g",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error: Failed to get profile",
    };
  }
}

export async function apiUpdateProfile(data: any) {
  try {
    //requestData = JSON.stringify(requestData);
    const response = await HttpService.post("/api/profile/edit", data, {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE5MzE5MzkyfQ.6Y9oAWiiqk560BHZHWvROXXVNVnldiTe0cDMQDyAh8g",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error: Failed to get profile",
    };
  }
}

export async function apiUpdatePhone(data: any) {
  try {
    //requestData = JSON.stringify(requestData);
    const response = await HttpService.post("/api/profile/phone/edit", data, {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE5MzE5MzkyfQ.6Y9oAWiiqk560BHZHWvROXXVNVnldiTe0cDMQDyAh8g",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error: Failed to get profile",
    };
  }
}

export async function apiGetProjects(token?: string) {
  try {
    const response = await HttpService.get("/api/projects", { headers: { authorization: token } });
    return response.data;
  } catch (error) {
    return {
      message: 'Server Error: Failed to Get All Project.',
    };

  }

}


export async function apiCreateProject(data: any) {

  const response = await HttpService.post("/api/projects/create", data)
  return response.data;

}

export async function apiGetProjectById(id: any, token?: string) {
  try {
    const response = await HttpService.get("/api/projects/" + id, { headers: { authorization: token } });
    return response.data;
  } catch (error) {
    return {
      message: 'Server Error: Failed to Get Project.',
    };
  }

}