import { UserDetails } from '../../components/UserDetails/UserDetails';
import { SecondaryHeader } from '../../components/Headers/SecondaryHeader/SecondaryHeader';
import { TableComponent } from '../../components/Table/Table';
import React, { useEffect, useMemo, useState } from 'react';
import { LoadingComponent } from '../../components/Loading/Loading';
import styles from './MainPage.module.scss';
import { useContactsData } from '../../utils/useContactsData.ts';
import { UserData } from '../../types/table';
export const MainPage = () => {
  const { data } = useContactsData();
  const [tableData, setTableData] = useState<UserData[] | undefined>(data);
  const [showIsActive, setShowIsActive] = useState(false);
  const [filterByName, setFilterByName] = useState('');
  const [filterByCity, setFilterByCity] = useState('');
  const [filteredTableData, setFilteredTableData] = useState<UserData[] | undefined>();
  const [selectedUserId, setSelectedUserId] = useState('');
  const citiesList = tableData?.map((item: any) => item.city) || [];

  const [sortFields, setSortFields] = useState<any>('');
  const [sortOrder, setSortOrder] = useState<any>('');

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleClickTableRow = (id: string) => setSelectedUserId(id);
  const handleNameChange = (e: React.ChangeEvent<any>) => setFilterByName(e.target.value);
  const handleByCityChange = (e: React.ChangeEvent<any>) => setFilterByCity(e.target.value);

  const handleFilterOnButtonClick = () => {
    const filteredData = tableData?.filter((row: any) => {
      const nameFilter = row.name.toLowerCase().includes(filterByName.toLowerCase());
      const cityFilter = row.city.toLowerCase().includes(filterByCity.toLowerCase());

      return nameFilter && cityFilter;
    });

    setFilteredTableData(filteredData);
  };

  const filteredSortedTable = useMemo(() => {
    let data = [...(tableData as any)];

    if (filteredTableData) return filteredTableData;

    if (showIsActive) {
      data = data.filter((row: any) => row.isActive);
    }

    if (sortFields) {
      data.sort((a: any, b: any) => {
        const fieldA = a[sortFields]?.toString() ?? '';
        const fieldB = b[sortFields]?.toString() ?? '';
        const compare = fieldA.localeCompare(fieldB, undefined);
        return sortOrder === 'asc' ? compare : -compare;
      });
    }
    return data;
  }, [tableData, showIsActive, sortOrder, sortFields, filteredTableData]);

  return (
    <>
      {tableData ? (
        <div className={styles.container}>
          <SecondaryHeader
            showIsActive={showIsActive}
            setShowIsActive={setShowIsActive}
            citiesList={citiesList}
            handleNameChange={(e) => handleNameChange(e)}
            handleByCityChange={(e) => handleByCityChange(e)}
            handleFilterOnButtonClick={handleFilterOnButtonClick}
          />
          <div className={styles.contentContainer}>
            <>
              <TableComponent
                setSortOrder={setSortOrder}
                setSortFields={setSortFields}
                sortOrder={sortOrder}
                sortFields={sortFields}
                filteredSortedTable={
                  filteredSortedTable.length > 0 ? filteredSortedTable : tableData
                }
                showIsActive={showIsActive}
                handleClickTableRow={handleClickTableRow}
              />
              <UserDetails id={selectedUserId} />
            </>
          </div>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};
