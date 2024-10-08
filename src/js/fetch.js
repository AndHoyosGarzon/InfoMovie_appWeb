export const getData = async (url, options, setData, setError) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error({ msg_error: `${response.statusText}` });
    }

    const data = await response.json();
    return setData(data.results);
  } catch (error) {
    return setError(error);
  }
};

export const getActors = async (url, options, setActors, setError) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error({ msg_error: `${response.statusText}` });
    }

    const data = await response.json();
    return setActors(data);
  } catch (error) {
    return setError(error);
  }
};

export const getTrailer = async (url, options, setData, setError) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error({ msg_error: `${response.statusText}` });
    }
    const data = await response.json();

    return setData(data);
  } catch (error) {
    return setError(error);
  }
};
