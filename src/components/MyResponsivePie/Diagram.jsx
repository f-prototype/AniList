import { useMemo, useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import styles from './MyResponsivePie.module.css';

export const MyResponsivePie = ({ user }) => {
  const [stats, setStats] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(user.data.relationships.stats.links.related);
      const result = await response.json();
      setStats(result);
    })();
  }, [user]);
  const categories = useMemo(() => {
    if (!stats) return;
    const result = [];
    const target = stats.data.find((el) => {
      return el.attributes.kind === 'anime-category-breakdown';
    }).attributes.statsData.categories;
    if (!target) return;
    for (let elem of Object.entries(target)) {
      result.push({
        id: elem[0],
        label: elem[0],
        value: elem[1],
      });
    }
    return result;
  }, [stats]);
  return (
    <div className={styles.container}>
      {categories && (
        <ResponsivePie
          data={categories}
          sortByValue={true}
          width={300}
          height={170}
          margin={{ top: 10, right: 10, bottom: 40, left: 30 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
          arcLinkLabelsTextOffset={3}
          arcLinkLabelsThickness={1}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLinkLabelsDiagonalLength={7}
          arcLinkLabelsStraightLength={7}
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 2]],
          }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
        />
      )}
    </div>
  );
};
