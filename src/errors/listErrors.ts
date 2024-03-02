export const listError = (err: any, ...str: string[]) => {

    console.log("Error: ", err);
    throw new Error(err)
}