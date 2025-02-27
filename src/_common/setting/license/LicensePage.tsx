import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../navigation/ui/HeaderNavigation";
import { Column } from "../../ui/Column";
import { Layout } from "../../ui/Layout";
import { MainText } from "../../ui/MainText";

interface LicenseData {
  licenses: string;
  repository: string;
  publisher: string;
  email: string;
  url: string;
}

export const LicensePage = () => {
  const [licenseData, setLicenseData] = useState<Record<string, LicenseData>>(
    {},
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLicense = async () => {
      try {
        const response = await fetch("/licenses.json");

        if (!response.ok) {
          throw new Error("Failed to fetch licenses.json");
        }

        const data = await response.json();
        setLicenseData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(
            err.message || "An error occurred while loading the license.",
          );
        } else {
          setError("An unknown error occurred while loading the license.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchLicense();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Column>
      <NavBar />
      <Layout>
        <MainText className="text-4xl">License</MainText>
        <Column role="ul">
          {Object.entries(licenseData).map(([key, item], index) => (
            <li key={index} className="mt-6 list-none">
              <MainText className="mb-2 text-xl">{key}</MainText>
              <MainText>Publisher: {item.publisher}</MainText>
              <MainText className={`${!item.email ? "hidden" : ""}`}>
                Email: {item.email}
              </MainText>
              <Link to={item.repository}>
                <MainText className="text-emerald-900 dark:text-emerald-500">
                  Repository: {item.licenses}
                </MainText>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={item.url}
                className={`${!item.url ? "hidden" : ""}`}
              >
                <MainText className="text-emerald-900 dark:text-emerald-500">
                  URL: {item.url}
                </MainText>
              </Link>
              <MainText className="dark:text-gray-400">
                License: {item.licenses}
              </MainText>
            </li>
          ))}
        </Column>
      </Layout>
    </Column>
  );
};
